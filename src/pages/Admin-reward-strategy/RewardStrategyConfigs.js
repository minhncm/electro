import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";

class RewardStrategyConfigs extends Configs {
  static resourceUrl = ResourceUrl.REWARD_STRATEGY;
  static resourceKey = "reward-strategies";
  static manageTitle = "Quản lý chiến lược điểm thưởng";
  static manageTitleLinks = [
    {
      link: ManagerPath.REWARD_STRATEGY,
      label: "QL chiến lược điểm thưởng",
    },
  ];
}

export default RewardStrategyConfigs;
