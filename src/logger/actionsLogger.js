const ALL_INFO_ACTION_TYPES = [ // save the actions with all of its payloads
];

let actions = [];

const actionsLogger = () => next => action => {
  actions = ALL_INFO_ACTION_TYPES.includes(action.type)
    ? actions.concat(action)
    : actions.concat({ type: action.type });

  return next(action);
};

export const getActionsLog = () => actions;
export default actionsLogger;
