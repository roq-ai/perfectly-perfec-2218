const mapping: Record<string, string> = {
  companies: 'company',
  tasks: 'task',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
