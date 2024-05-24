const routes = [
    {
        path:"/",
        component:() => import("../Layout.vue"),
        
        children:[
            {
                path:"/",
                name:"index",
                component:() => import("../view/index.vue"),
            },
            {
                path:"/foodMenu",
                name:"foodMenu",
                component:() => import("../view/foodMenu.vue"),
            },
            {
                path:"/resturantTwoColumn",
                name:"resturantTwoColumn",
                component:() => import("../view/resturantTwoColumn.vue"),
            },
        ]
    },
];
export default routes