<template>
    <nav class="navbar navbar-expand-md  navbar-light bg-light">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item" :class="{dropdown : link.sublinks}" v-for="link in links">
                        <router-link class="nav-link dropdown-toggle" v-if="link.sublinks" :to="link.link" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ link.text }}</router-link>
                            <div class="dropdown-menu" v-if="link.sublinks" aria-labelledby="dropdown04">
                               <router-link class="dropdown-item" :to="sublink.link" v-for="sublink in link.sublinks"> {{ sublink.text}}</router-link>
                            </div>
                        <router-link class="nav-link" v-else :to="link.link">{{ link.text }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
        data() {
            return {
                links: [
                    {
                        link: '/',
                        text: 'Home',
                        sublinks: null
                    },
                    {
                        link: '/category/all',
                        text: 'Categories',
                        sublinks: [
                            {
                                link: '/category/europa',
                                text: 'Europa'
                            },
                            {
                                link: '/category/dubai',
                                text: 'Dubai'
                            },
                            {
                                link: '/category/europa',
                                text: 'Afirica'
                            },
                            {
                                link: '/category/europa',
                                text: 'South'
                            }
                        ]
                    },
                    {
                        link: '/about',
                        text: 'About',
                        sublinks: null
                    },
                    {
                        link: '/contact',
                        text: 'Contact',
                        sublinks: null
                    }
                ]
            }
        }
}
</script>