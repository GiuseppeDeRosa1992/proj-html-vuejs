import { reactive } from 'vue';

const iMieiDati = reactive({
    headerLinks: [
        {
            titolo: "Home",
            link: [
                "Home",
                "Home1",
                "Home2",
                "Home3",
                "Home4",
                "Home5",
                "Home6",
            ]
        },
        {
            titolo: "Celebrity",
            link: [
                "Celebrity Single",
                "Celebrity",
            ]
        },
        {
            titolo: "Movie",
            link: [
                "Movie Post",
                "Top Rate Movie",
                "Movie Category",
                "Single Movie",
            ]
        },
        {
            titolo: "Page",
            link: [
                "Princing Table",
                "Call to Action",
                "My Account",
                "Cart",
                "Checkout",
                "Wishlist",
            ]
        },
        {
            titolo: "Shop",
            link: [
                {
                    titolo: "Shop Sidebar",
                    link: [
                        "Grid View",
                        "List View"
                    ],
                },

                {
                    titolo: "No Sidebar",
                    link: [
                        "Grid View",
                        "List View"
                    ],
                }

            ]
        },
    ],

    searchLinks: [
        "All Movie Category",
        "Coming Soon",
        "Latest Movie",
        "Top Rating",
        "Tv Series",
    ]
});

export default iMieiDati;