package com.ncm.electro.service.inventory;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.inventory.ProductInventoryResponse;
import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.mapper.inventory.ProductInventoryMapper;
import com.ncm.electro.projection.inventory.ProductInventory;
import com.ncm.electro.repository.inventory.DocketVariantRepository;
import com.ncm.electro.repository.product.ProductRepository;
import com.ncm.electro.specification.ProductSpecification;
import com.ncm.electro.utils.InventoryUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductInventoryServiceImpl implements ProductInventoryService{
    private final ProductRepository productRepository;
    private final DocketVariantRepository docketVariantRepository;
    private final ProductInventoryMapper productInventoryMapper;
    @Override
    public ListResponse<ProductInventoryResponse> findAll(int page, int size) {
        Page<Product> products = productRepository.findAll(
                ProductSpecification.docketedProducts(),
                PageRequest.of(page - 1, size));
        List<ProductInventory> productInventories = new ArrayList<>();

        for (Product product : products) {
            ProductInventory productInventory = new ProductInventory();
            productInventory.setProduct(product);

            List<DocketVariant> transactions = docketVariantRepository.findByProductId(product.getId());
            productInventory.setTransactions(transactions);
            Map<String, Integer> inventoryIndices = InventoryUtils.calculateInventoryIndices(transactions);

            productInventory.setInventory(inventoryIndices.get("inventory"));
            productInventory.setWaitingForDelivery(inventoryIndices.get("waitingForDelivery"));
            productInventory.setAvailable(inventoryIndices.get("available"));
            productInventory.setIncoming(inventoryIndices.get("incoming"));

            productInventories.add(productInventory);
        }

        return new ListResponse<>(productInventoryMapper.toResponse(productInventories), products);
    }

}
