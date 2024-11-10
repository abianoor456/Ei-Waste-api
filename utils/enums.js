const Permissions = {
  VIEW_COOKING_MANAGER: 'viewCookingManager',
  VIEW_PRE_PRODUCTION_MANAGER: 'viewPreProductionManager',
  VIEW_STORAGE_MANAGER: 'viewStorageManager',
  VIEW_PACKAGING_MANAGER: 'viewPackagingManager',
  VIEW_MASTER_OVERVIEW: 'viewMasterOverview',
  VIEW_COOKING: 'viewCooking',
  VIEW_PRE_PRODUCTION: 'viewPreProduction',
  VIEW_STORAGE: 'viewStorage',
  VIEW_PACKAGING: 'viewPackaging'
};

const Status = {
  IN_PROGRESS: 'in-progress',
  CANCELLED: 'cancelled',
  REJECTED: 'rejected',
  COMPLETED: 'completed'
};

const CookingRejectionReasons = {
  TEMP_ERROR: 'temp_error',
  TIME_DEVIATION: 'time_deviation',
  CONTAMINATION: 'contamination',
  UNDERWEIGHT: 'underweight',
  OVERWEIGHT: 'overweight',
  BAD_QUALITY: 'bad-quality'
};

const StorageRejectionReasons = {
  TEMP_ERROR: 'temp_error',
  HUMIDITY: 'humidity',
  HANDLING: 'handling',
  EXPIRED: 'expired',
  OTHER: 'other'
};

const PackagingRejectionReasons = {
  LABELING_ISSUE: 'labeling_issue',
  PACKAGING_ISSUE: 'packaging_issue',
  SEALING_FAILURE: 'sealing_failure',
  NONCONFORMITY: 'nonconformity'
};

module.exports = { Permissions, Status, CookingRejectionReasons, StorageRejectionReasons, PackagingRejectionReasons };
