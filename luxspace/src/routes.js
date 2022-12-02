
import Detai from "./pages/Detail.vue";
import Form from "./pages/Shipping.vue";
import ShippingList from "./pages/ShippingList.vue";

export default [
    {
        path: '/',
        component: Detai,
    },
    {
        path: '/shipping',
        component: Form
    },
    {
        path: "/shippingList",
        component: ShippingList,
    },
]