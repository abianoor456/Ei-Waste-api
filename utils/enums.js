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

module.exports = { Permissions, Status };
