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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View user information',
    'View company information',
    'View employee information',
    'View vacation information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee data',
    'Manage vacation requests',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/fb75a13b-0217-47ad-971e-89b8f67647f3',
};
