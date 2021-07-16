import * as t from "../types";

const cart = (
  state = {
    loading: false,
    error: null,
    addedItems: [],
    total: 0,
    VAT: {},
    VATCUT: 0,
    shipping: 10,
    endTotal: 0,
  },
  action
) => {
  switch (action.type) {
    case t.ADD_TO_CART:
      var addedItem = action.payload;
      var existed_item = state.addedItems.find(
        (item) => action.payload._id === item._id
      );
      if (existed_item) {
        existed_item.quantity += 1;
        existed_item.netPrice = addedItem.price * addedItem.quantity;
        return {
          ...state,
          existed_item,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        var newTotal = state.total + addedItem.price;
        addedItem.netPrice = addedItem.price * addedItem.quantity;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case t.REMOVE_FROM_CART:
      var itemToRemove = state.addedItems.find((item) => action.id === item.id);
      var new_items = state.addedItems.filter((item) => action.id !== item.id);

      //calculating the total
      var newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      // console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    case t.REMOVE_CART:
      //calculating the total
      // var newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log("REMOVE");
      return {
        ...state,
        addedItems: [],
        total: 0,
        VAT: {},
        VATCUT: 0,
      };
    case t.ADD_QUANTITY:
      var addedItem = action.payload;
      addedItem.quantity += 1;
      addedItem.netPrice = addedItem.price * addedItem.quantity;
      var newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    case t.SUBTRACT_QUANTITY:
      var addedItem = action.payload;

      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item._id !== action.payload._id
        );
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItem.quantity -= 1;
        addedItem.netPrice = addedItem.price * addedItem.quantity;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal,
        };
      }
    case t.ADD_COMMENT:
      var updateItem = action.payload.product;
      var addedItems = state.addedItems.map((item) => {
        if (item._id === updateItem._id) {
          item.comment = action.payload.comment;
          return item;
        } else {
          return item;
        }
      });
      return {
        ...state,
        addedItems: addedItems,
      };
    case t.CALCULATE_VAT:
      let VAT = {};
      state.addedItems.map((item) => {
        if (item.VAT in VAT) {
          // state.VAT[item.VAT] += item.netPrice;
          VAT[item.VAT].grossTotal += item.netPrice;
        } else {
          VAT[item.VAT] = { grossTotal: item.netPrice };
        }
      });

      return {
        ...state,
        VAT: VAT,
      };
    case t.CALCULATE_VAT_CUT_TOTAL:
      let VATCUT = 0;
      if (state.VAT && Object.keys(state.VAT).length > 0) {
        Object.keys(state.VAT).map((key, V) => {
          VATCUT =
            VATCUT +
            ((state.VAT[key].grossTotal / (1 + key / 100)) * key) / 100;
        });
        return {
          ...state,
          VATCutTotal: VATCUT,
        };
      } else {
        return {
          ...state,
        };
      }

    case t.CALCULATE_TOTAL:
      return {
        ...state,
        endTotal: state.total + state.shipping,
      };
    default:
      return { ...state };
  }
};

export default cart;
