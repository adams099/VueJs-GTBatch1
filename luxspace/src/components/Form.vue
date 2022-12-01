<template>
    <div class="row justify-content-center">
        <div class="col col-md-5 my-5">
            <form class="border rounded-sm border-primary p-5" id="form-checkout">
                <h1 class="mb-5" align="center">Shipping Form</h1>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="first-name">First Name</label>
                        <input placeholder="Enter your first name" type="text" class="form-control" id="first-name"
                            required>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="phone-number">Phone Number</label>
                        <input placeholder="Enter your phone number" type="number" class="form-control"
                            id="phone-number" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="last-name">Last Name</label>
                        <input placeholder="Enter your last name" type="text" class="form-control" id="last-name"
                            required>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="city">City</label>
                        <input placeholder="Enter City" type="text" class="form-control" id="city" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="email">Email Addres</label>
                        <input placeholder="Enter email" type="email" class="form-control" id="email" required>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="postal-code">Postal Code</label>
                        <input placeholder="Enter postal code" type="text" class="form-control" id="postal-code"
                            required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <textarea name="address" id="inputAddress" cols="46" rows="4" placeholder="Enter address"
                        required></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="background-color: pink;">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormComponent'
}
</script>

<style>

</style>