import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
class InventoryConfigs extends Configs {
  static productInventoryResourceUrl = ResourceUrl.PRODUCT_INVENTORY;
  static productInventoryResourceKey = "product-inventories";
  static manageTitle = "Theo dõi tồn kho sản phẩm";
  
}

export default InventoryConfigs;
