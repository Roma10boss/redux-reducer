let state = {numberOfPresents: 1}

let action = {
  type: "presents/increase",
};

export function managePresents(state, action) {
  switch (action.type) {
    case "presents/increase":
      return {numberOfPresents: state.numberOfPresents+1}
      default:
        return state
  }

}