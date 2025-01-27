const getWidgetApi = (interactionId?: string) => {
  const api = (<any>window).WS.widgetAPI(interactionId);

  return api;
};

const getActiveInteraction = (api?: any) => {
  if (!api) {
    // eslint-disable-next-line no-param-reassign
    api = (<any>window).WS.widgetAPI();
  }
  const interactionsList = api.getAllInteractions();
  const active = interactionsList.find((interaction: any) => interaction.state === 'ACTIVE');
  return active;
};

export { getWidgetApi, getActiveInteraction };
