<template>
  <b-modal
    ref="verification"
    hide-footer
    centered
    class="bootstrap-modal verification nopadding"
    title="Verification"
  >
    <div class="modal-content-container">
      <div class="verification-content">
        <p class="block-title">
          Please enter and fill out the empty boxes below to verify your
          mnemonic phrase key.
        </p>
      </div>

      <div class="verify-button">
        <stadard-button :options="options" @click="mnemonicDoneModalOpen" />
      </div>
    </div>
    <!-- modal-content-container -->
  </b-modal>
</template>

<script>
import StandardButton from '@/components/Buttons/StandardButton';

export default {
  components: {
    'stadard-button': StandardButton
  },
  props: {
    mnemonicValues: {
      type: Array,
      default: function() {
        return [];
      }
    },
    mnemonicDoneModalOpen: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      options: {
        title: 'Verify',
        buttonStyle: 'green',
        fullWidth: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import 'RadioButtonVerificationModal.scss';
</style>
