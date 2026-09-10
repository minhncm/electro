package com.ncm.electro;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ncm.electro.dto.client.ClientCartResponse;
import com.ncm.electro.dto.client.ClientCartVariantResponse;
import com.ncm.electro.entity.cart.Cart;
import com.ncm.electro.mapper.client.ClientCartMapper;
import com.ncm.electro.mapper.client.ClientCartVariantMapper;
import com.ncm.electro.repository.cart.CartRepository;
import com.ncm.electro.repository.cart.CartVariantRepository;
import com.ncm.electro.repository.inventory.DocketVariantRepository;
import com.ncm.electro.service.client.ClientCartServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.junit.jupiter.api.Assertions.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@ExtendWith(MockitoExtension.class)
public class CartServiceTests {
//    @Mock
//    private CartRepository cartRepository;
//    @Mock
//    private ClientCartMapper clientCartMapper;
//    @Mock
//    private ClientCartVariantMapper clientCartVariantMapper;
//    @Mock
//    private CartVariantRepository cartVariantRepository;
//    @Mock
//    private DocketVariantRepository docketVariantRepository;
//
//    @InjectMocks
//    private ClientCartServiceImpl clientCartService;
//
//    private ClientCartResponse clientCartResponse;
//
//    @BeforeEach
//    public void init() throws Exception{
//        clientCartResponse = new ClientCartResponse();
//        clientCartResponse.setId(1L);
//
//        ObjectMapper objectMapper = new ObjectMapper();
//
//        // properties JSON
//        JsonNode properties = objectMapper.readTree("""
//            {
//                "color": "red",
//                "size": "L"
//            }
//        """);
//
//        // Product
//        ClientCartVariantResponse.ClientVariantResponse.ClientProductResponse product =
//                new ClientCartVariantResponse.ClientVariantResponse.ClientProductResponse();
//        product.setId(1);
//        product.setName("Áo thun nam");
//        product.setSlug("ao-thun-nam");
//        product.setThumbnail("https://example.com/image.jpg");
//        product.setPromotions(List.of()); // hoặc mock thêm nếu cần
//
//        // Variant
//        ClientCartVariantResponse.ClientVariantResponse variant =
//                new ClientCartVariantResponse.ClientVariantResponse();
//        variant.setId(101L);
//        variant.setProduct(product);
//        variant.setPrice(199000.0);
//        variant.setProperties(properties);
//        variant.setInventory(10);
//
//        // CartVariantResponse
//        ClientCartVariantResponse cartVariant = new ClientCartVariantResponse();
//        cartVariant.setVariant(variant);
//        cartVariant.setQuantity(2);
//        clientCartResponse.setCartVariants(Set.of(cartVariant));
//    }
//
//    @Test
//    void findCartByUsername() {
//        String username = "ncm";
//        Cart cart = new Cart();
//        Mockito.when(cartRepository.findByUsername(username)).thenReturn(Optional.of(cart));
//        Mockito.when(clientCartMapper.entityToResponse(cart)).thenReturn(clientCartResponse);
//
//        ClientCartResponse response = clientCartService.findByUsername(username);
//
//        assertEquals(1, response.getId());
//    }
}
