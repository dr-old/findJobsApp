import {types} from '../actions/types';

const initialState = {
  modalList: {
    id: '',
    status: false,
    detail: [],
  },
  cartList: [],
  formCart: {},
  formRegister: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  login: {
    idToken: null,
    user: {},
  },
  formLogin: {
    email: '',
    password: '',
  },
  formVerify: {
    otp: '',
  },
  formLocation: {
    location: {},
    description: '',
    placeId: '',
    latitude: '',
    longitude: '',
  },
  formSearchMaps: {
    origin: '',
    originDetail: {},
    destination: '',
    destinationDetail: {},
  },
};

// eslint-disable-next-line no-undef
export default generalReducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUCER MODALLIST
    case 'SET_MODAL_LIST':
      return {
        ...state,
        modalList: {
          ...state.modalList,
          id: action.id,
          status: action.status,
          detail: action.detail,
        },
      };

    //REDUCER ADD TO CART
    case 'ADD_TO_CART':
      let checkExistStore = state.cartList.filter(
        item => item.storeId === action.storeId,
      );
      let besideStore = state.cartList.filter(
        item => item.storeId !== action.storeId,
      );
      let store = {};

      if (checkExistStore.length === 1) {
        let checkExistProduct = checkExistStore[0].product.filter(
          item => item.productId === action.productId,
        );
        let besideProduct = checkExistStore[0].product.filter(
          item => item.productId !== action.productId,
        );
        let product = {};
        if (checkExistProduct.length === 1) {
          checkExistProduct[0].quantity++;
          product = checkExistProduct[0];
        } else {
          product = action.product;
        }
        besideProduct.push(product);
        checkExistStore[0].product = besideProduct;
        store = checkExistStore[0];
      } else {
        store = {
          storeId: action.storeId,
          product: action.product,
        };
      }
      besideStore.push(store);

      return {
        ...state,
        cartList: besideStore,
      };

    //REDUCER MIN TO CART
    case 'MIN_TO_CART':
      let checkExistStoreMin = state.cartList.filter(
        item => item.storeId === action.storeId,
      );
      let besideStoreMin = state.cartList.filter(
        item => item.storeId !== action.storeId,
      );
      let storeMin = {};

      if (checkExistStoreMin.length === 1) {
        let checkExistProductMin = checkExistStoreMin[0].product.filter(
          item => item.productId === action.productId,
        );
        let besideProductMin = checkExistStoreMin[0].product.filter(
          item => item.productId !== action.productId,
        );
        let product = {};
        if (checkExistProductMin.length === 1) {
          checkExistProductMin[0].quantity++;
          product = checkExistProductMin[0];
        } else {
          product = action.product;
        }
        besideProductMin.push(product);
        checkExistStoreMin[0].product = besideProductMin;
        storeMin = checkExistStoreMin[0];
      } else {
        storeMin = {
          storeId: action.storeId,
          product: action.product,
        };
      }
      besideStoreMin.push(storeMin);

      return {
        ...state,
        cartList: besideStoreMin,
      };

    //REDUCER FORM REGISTER
    case 'SET_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM REGISTER
    case 'CLEAN_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        },
      };

    //REDUCER FORM LOGIN
    case 'SET_LOGIN':
      return {
        ...state,
        login: {
          ...state.login,
          idToken: action.idToken,
          user: action.user,
        },
      };

    case 'SET_LOGIN_CLEAN':
      return {
        ...state,
        login: {
          ...state.login,
          idToken: null,
          user: {},
        },
      };

    //REDUCER FORM LOGIN
    case 'SET_FORM_LOGIN':
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM LOGIN
    case 'CLEAN_FORM_LOGIN':
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          email: '',
          password: '',
        },
      };

    //REDUCER FORM VERIFY OTP
    case 'SET_FORM_VERIFY':
      return {
        ...state,
        formVerify: {
          ...state.formVerify,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM VERIFY
    case 'CLEAN_FORM_VERIFY':
      return {
        ...state,
        formVerify: {
          ...state.formVerify,
          otp: '',
        },
      };

    //REDUCER FORM LOCATION
    case 'SET_FORM_LOCATION':
      return {
        ...state,
        formLocation: {
          ...state.formLocation,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM PLACE
    case 'SET_FORM_CURRENT_PLACE':
      return {
        ...state,
        formLocation: {
          ...state.formLocation,
          description: action.description,
          placeId: action.placeId,
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };

    //REDUCER FORM LOCATION
    case 'CLEAN_FORM_LOCATION':
      return {
        ...state,
        formLocation: {
          ...state.formLocation,
          location: {},
          description: '',
          placeId: '',
          latitude: '',
          longitude: '',
        },
      };

    //REDUCER FORM SEARCH MAPS
    case 'SET_FORM_SEARCHMAPS':
      return {
        ...state,
        formSearchMaps: {
          ...state.formSearchMaps,
          [action.inputType]: action.inputValue,
        },
      };

    //REDUCER FORM SEARCH MAPS
    case 'CLEAN_FORM_SEARCHMAPS':
      return {
        ...state,
        formSearchMaps: {
          ...state.formSearchMaps,
          origin: '',
          destination: '',
        },
      };

    default:
      return state;
  }
};
