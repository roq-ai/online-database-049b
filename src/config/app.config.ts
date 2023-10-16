interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Document Manager'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Document Manager', 'Search User', 'Guest User', 'IT Support'],
  tenantName: 'Organization',
  applicationName: 'Online Database',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read documents', 'View organization information', 'Perform searches', 'View email logs'],
  ownerAbilities: [
    'Manage documents',
    'Create and manage searches',
    'View user and organization details',
    'View IT support and email logs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/bfd00373-3f2e-4b4c-8dba-74215a1a6c04',
};
