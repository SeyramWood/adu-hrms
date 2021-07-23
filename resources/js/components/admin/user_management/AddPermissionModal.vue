<template>
  <form @submit.prevent="addRolePermission()">
    <div class="modal-card py-4" style="width: 700px">
      <header class="modal-card-head">
        <h4 class="modal-card-title text-main label pt-2">
          Manage Permission for {{ role.role }}
        </h4>
        <button class="delete" type="button" @click="$emit('close')" />
      </header>

      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-6">
            <h5 class="text-main pb-4">Page</h5>
            <div class="block" style="display: block">
              <b-checkbox
                v-for="(p, i) in getPermissions.page"
                :native-value="p"
                :key="p + i"
                size=""
                type="is-success"
                v-model="rolePermissions.page"
              >
                {{ p }}
              </b-checkbox>
            </div>
          </div>
          <div class="column is-6">
            <h5 class="text-main pb-4">Tabs</h5>
            <b-checkbox
              v-for="(t, i) in getPermissions.tab"
              :native-value="t"
              :key="t + i"
              size=""
              type="is-success"
              v-model="rolePermissions.tab"
            >
              {{ t }}
            </b-checkbox>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <h5 class="text-main pb-4">CRUD</h5>
            <div class="block" style="display: block">
              <b-checkbox
                v-for="(crud, i) in getPermissions.crud"
                :native-value="crud"
                :key="crud + i"
                size=""
                type="is-success"
                v-model="rolePermissions.crud"
              >
                {{ crud }}
              </b-checkbox>
            </div>
          </div>
          <div class="column is-6">
            <h5 class="text-main pb-4">Other</h5>
            <b-checkbox
              v-for="(d, i) in getPermissions.other"
              :native-value="d"
              :key="d + i"
              size=""
              type="is-success"
              v-model="rolePermissions.other"
            >
              {{ d }}
            </b-checkbox>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <h5 class="text-main pb-4">Organization</h5>
            <div class="block" style="display: block">
              <b-checkbox
                v-for="(org, i) in getPermissions.organization"
                :native-value="org"
                :key="org + i"
                size=""
                type="is-success"
                v-model="rolePermissions.organization"
              >
                {{ org }}
              </b-checkbox>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-field class="buttons">
          <button class="button is-success is-light" :disabled="isSubmitting">
            {{ isSubmitting ? "Saving..." : "Save" }}
          </button>
          <b-button
            class="is-danger is-light"
            @click="closeModal()"
            :disabled="isSubmitting"
            >Cancel</b-button
          >
        </b-field>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddPermissionsModal",
  props: {
    role: { require: true, type: Object },
  },
  computed: {
    ...mapGetters(["getPermissions", "getProfile"]),
  },
  beforeMount() {
    this.rolePermissions = { ...this.role.permissions };
  },
  data() {
    return {
      isSubmitting: false,
      rolePermissions: {
        page: [],
        tab: [],
        other: [],
        crud: ["read"],
        organization: [],
      },
    };
  },
  methods: {
    ...mapActions(["dispatchRole"]),
    addRolePermission() {
      this.isSubmitting = true;
      this.$axios
        .put(
          `/dashboard/add-role-permission/${this.role.id}`,
          this.rolePermissions
        )
        .then((res) => {
          this.isSubmitting = false;
          if (res.status === 200 && res.data.created) {
            this.dispatchRole({
              type: "ADD_ROLE_PERMISSION",
              payload: { id: this.role.id, data: this.rolePermissions },
            });
            this.closeModal();
            setTimeout(() => {
              this.snackbar("Permission added successfully.", "is-success");
            }, 1000);
            this.rolePermissions = {
              page: [],
              tab: [],
              other: [],
              crud: ["read"],
              organization: [],
            };
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          console.log(err);
        });
    },
    closeModal() {
      this.rolePermissions = {
        page: [],
        tab: [],
        other: [],
        crud: ["read"],
        organization: [],
      };
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>