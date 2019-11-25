import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from '@/components/Layout/Layout'
import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
import LayoutPage from '@/components/Layout/LayoutPage'


Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/dashboardv1'
        },
        // Admin Pages
        {
            path: '/',
            component: Layout,
            children: [
                // Dashboard
                {
                    path: '/dashboardv1',
                    component: DashboardV1
                }, {
                    path: '/dashboardv2',
                    component: DashboardV2
                }, {
                    path: '/dashboardv3',
                    component: DashboardV3
                },
                // Widgets
                {
                    path: '/widgets',
                    component: Widgets
                },
                // Elements
                {
                    component: Buttons,
                    path: '/buttons',
                }, {
                    component: Notifications,
                    path: '/notifications',
                }, {
                    component: Sweetalert,
                    path: '/sweetalert'
                }, {
                    component: Carousel,
                    path: '/carousel',
                }, {
                    component: Spinners,
                    path: '/spinners',
                }, {
                    component: DropdownAnimations,
                    path: '/dropdown',
                }, {
                    component: Tree,
                    path: '/tree'
                }, {
                    component: Draggable,
                    path: '/dragable'
                }, {
                    component: Cards,
                    path: '/cards',
                }, {
                    component: Grid,
                    path: '/grid',
                }, {
                    component: GridMasonry,
                    path: '/grid-masonry',
                }, {
                    component: Typography,
                    path: '/typography',
                }, {
                    component: IconsFont,
                    path: '/icons-font',
                }, {
                    component: IconsWeather,
                    path: '/icons-weather',
                }, {
                    component: Colors,
                    path: '/colors',
                },
                // Forms
                {
                    component: FormStandard,
                    path: '/form-standard',
                }, {
                    component: FormExtended,
                    path: '/form-extended',
                }, {
                    component: FormValidation,
                    path: '/form-validation',
                }, {
                    component: FormWizard,
                    path: '/form-wizard',
                }, {
                    component: FormUpload,
                    path: '/form-upload',
                }, {
                    component: FormImagecrop,
                    path: '/form-cropper',
                },
                //Charts
                {
                    component: ChartFlot,
                    path: '/chart-flot',
                }, {
                    component: ChartRadial,
                    path: '/chart-radial',
                }, {
                    component: ChartJs,
                    path: '/chart-chartjs',
                }, {
                    component: ChartMorris,
                    path: '/chart-morris',
                }, {
                    component: ChartEcharts,
                    path: '/chart-echarts',
                },
                // Tables
                {
                    component: TableStandard,
                    path: '/table-standard',
                }, {
                    component: TableExtended,
                    path: '/table-extended',
                }, {
                    component: TableDatatable,
                    path: '/table-datatable',
                }, {
                    component: TableVueTables,
                    path: '/table-vuetables',
                },
                // Maps
                {
                    component: MapsGoogle,
                    path: '/map-google',
                }, {
                    component: MapsVector,
                    path: '/map-vector',
                },
                // Extras
                {
                    component: Mailbox,
                    path: '/mailbox',
                }, {
                    component: BugTracker,
                    path: '/bug-tracker'
                }, {
                    component: ContactDetails,
                    path: '/contact-details'
                }, {
                    component: Contacts,
                    path: '/contacts'
                }, {
                    component: Faq,
                    path: '/faq'
                }, {
                    component: FileManager,
                    path: '/file-manager'
                }, {
                    component: Followers,
                    path: '/followers'
                }, {
                    component: HelpCenter,
                    path: '/help-center'
                }, {
                    component: Plans,
                    path: '/plans'
                }, {
                    component: ProjectDetails,
                    path: '/project-details'
                }, {
                    component: Projects,
                    path: '/projects'
                }, {
                    component: Settings,
                    path: '/settings'
                }, {
                    component: SocialBoard,
                    path: '/social-board'
                }, {
                    component: TeamViewer,
                    path: '/team-viewer'
                }, {
                    component: VoteLinks,
                    path: '/vote-links'
                }, {
                    component: Timeline,
                    path: '/timeline',
                }, {
                    component: Calendar,
                    path: '/calendar',
                }, {
                    component: Invoice,
                    path: '/invoice',
                }, {
                    component: Search,
                    path: '/search',
                }, {
                    component: Todo,
                    path: '/todo',
                }, {
                    component: Profile,
                    path: '/profile',
                },
                // Blog
                {
                    component: Blog,
                    path: '/blog-list'
                }, {
                    component: BlogPost,
                    path: '/blog-post'
                }, {
                    component: BlogArticles,
                    path: '/blog-articles'
                }, {
                    component: BlogArticleView,
                    path: '/blog-article-view'
                },
                // ECommerce
                {
                    component: EcommerceOrders,
                    path: '/ecommerce-orders',
                }, {
                    component: EcommerceOrderView,
                    path: '/ecommerce-order-view'
                }, {
                    component: EcommerceProducts,
                    path: '/ecommerce-products'
                }, {
                    component: EcommerceProductView,
                    path: '/ecommerce-product-view'
                }, {
                    component: EcommerceCheckout,
                    path: '/ecommerce-checkout'
                },
                // Forum
                {
                    component: ForumHome,
                    path: '/forum',
                    children: [
                        {
                            path: '/',
                            redirect: 'categories'
                        },
                        {
                            component: ForumCategories,
                            path: 'categories'
                        }, {
                            component: ForumTopics,
                            path: 'topics/:catid'
                        }, {
                            component: ForumDiscussion,
                            path: 'discussion/:topid'
                        }
                    ]
                }
            ]
        },
        // Horizontal Layout
        {
            path: '/',
            component: LayoutHorizontal,
            children: [
                // Dashboard
                {
                    path: '/dashboardh',
                    component: DashboardH
                }
            ]
        },
        // User Pages
        {
            path: '/',
            component: LayoutPage,
            children: [
                {
                    component: Login,
                    path: '/login',
                }, {
                    component: Register,
                    path: '/register',
                }, {
                    component: Recover,
                    path: '/recover',
                }, {
                    component: Lock,
                    path: '/lock',
                }, {
                    component: Error404,
                    path: '/notfound',
                }, {
                    component: Error500,
                    path: '/error500'
                }, {
                    component: Maintenance,
                    path: '/maintenance'
                },
            ]
        },
        // Not found route
        {
            path: '*',
            redirect: '/'
        }
    ]
})