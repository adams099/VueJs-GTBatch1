<template>
    <div>
        <Navbar>
        </Navbar>

        <Breadcrumb>
        </Breadcrumb>

        <Form>
        </Form>

        <Footer>
        </Footer>

        <Copyright>
        </Copyright>
    </div>
</template>

<script>
import Copyright from '../components/Copyright.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Footer from '../components/Footer.vue';
import Form from '../components/Form.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'FormShipping',
    components: {
        Copyright, Footer, Form, Navbar, Breadcrumb
    }
}
</script>

<style>

</style>