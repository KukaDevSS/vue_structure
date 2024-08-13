<template>
    <div>
        <div class="card p-2 mx-auto rounded mt-2 shadow-sm">
            <p class="m-0 fw-bold fs-5">List of content</p>
        </div>
        <div class="card p-2 mx-auto rounded mt-2 shadow-sm">
            <div class="row justify-content-center mt-1">
                <div class="d-flex flex-wrap justify-content-center align-items-center">
                    <div class="me-2">
                        <input type="text" placeholder="Search" class="form-control w-100" />
                    </div>
                    <div class="me-2">
                        <select class="form-select w-100">
                            <option selected>All Status</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="me-2">
                        <select class="form-select w-100">
                            <option selected>All Service</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="me-2">
                        <select class="form-select w-100">
                            <option selected>All Service</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="me-2">
                        <select class="form-select w-100">
                            <option selected>All Service</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div>
                        <input type="datetime-local" class="form-control w-100" />
                    </div>
                </div>
            </div>
            <div class="justify-content-center mt-3 d-flex">
                <div class="btn btn-primary mx-2 px-4"> All <span class="btn-number bg-light text-primary rounded">100</span></div>
                <div class="btn btn-outline-warning mx-2"> Processing <span class="btn-number bg-light text-warning rounded">64</span></div>
                <div class="btn btn-outline-success mx-2"> Approved <span class="btn-number bg-light text-success rounded">36</span></div>
                <div class="btn btn-outline-danger mx-2"> Cancelled <span class="btn-number bg-light text-danger rounded">0</span></div>
            </div>
        </div>
        <div class="card mt-4 shadow-sm p-2">
            <TableList />
        </div>
    </div>
</template> 

<script setup>
import TableList from "../components/common/TableList.vue"

</script>

<style scoped>
.btn-number{
    font-size: 12px;
    padding: 2px 4px;
}
*{
  font-family: 'Times New Roman', Times, serif;
}
</style>