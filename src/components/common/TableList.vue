<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Full Name</th>
                    <th>ID No.</th>
                    <th>Date Of Birth</th>
                    <th>Phone Number</th>
                    <th>Ac_Type</th>
                    <th>Type_Owner</th>
                    <th>Currency</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in 20" :key="i" class="td-fs">
                    <td>1</td>
                    <td>Mr.</td>
                    <td>Somsy Sidouangty</td>
                    <td>ID123456789</td>
                    <td>08.12.2000</td>
                    <td>02098996578</td>
                    <td>Saving Account</td>
                    <td>Individual</td>
                    <td>LAK</td>
                    <td>
                        <button v-if="status === 'approved'" class="btn-status bg-success text-white rounded border-success px-1 text-center m-0">
                            Approved
                        </button>
                        <button v-if="status === 'processing'" class="btn-status bg-warning text-white rounded border-warning px-1 text-center m-0">
                            Processing
                        </button>
                    </td>
                    <td>
                        <button class="bg-primary rounded text-white border-primary me-1">view</button>
                        <button class="bg-danger rounded border-danger text-white">close</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const status = 'processing';

</script>

<style scoped>
.btn-status {
    padding: 1px 4px;
    font-size: 14px;
}
.image-primary {
    filter: invert(29%) sepia(82%) saturate(1496%) hue-rotate(179deg) brightness(96%) contrast(101%);
}
.td-fs {
    font-size: 14px;
}
</style>