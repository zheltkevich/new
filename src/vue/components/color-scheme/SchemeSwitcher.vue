<template>
    <fieldset class="header__scheme-switcher scheme-switcher rad-shadow">
        <label
            v-for="(scheme, i) in schemes"
            :key="i"
            class="scheme-switcher__label text1"
            :for="scheme.id"
            :aria-label="scheme.name">
            <input
                v-model="pickedScheme"
                :id="scheme.id"
                class="scheme-switcher__input"
                checked
                type="radio"
                name="theme"
                :value="scheme.id"
                @change="changeScheme(scheme.id)">
            <span>{{ scheme.name }}</span>
        </label>
    </fieldset>
</template>

<script>
import { COLOR_SCHEMES, saveScheme, getSavedScheme } from '@modules/colorScheme.js';

export default {
    name: 'SchemeSwitcher',
    data() {
        return {
            schemes: COLOR_SCHEMES,
            pickedScheme: null,
        };
    },
    methods: {
        changeScheme(value) {
            saveScheme(value);
            this.setSwitcher();
        },
        setSwitcher() {
            this.pickedScheme = getSavedScheme();
        },
    },
    mounted() {
        this.setSwitcher();
    },
};
</script>

<style lang="scss">
.scheme-switcher {
    display: flex;
    overflow: hidden;
    margin: 0;
    padding: 0 12px;
    border-radius: 16px;
    column-gap: 16px;

    label {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: var(--text2);
        font-size: 14px;
        user-select: none;

        &:hover {
            cursor: pointer;
        }

        &:not(:last-child) {
            &::after {
                content: "";
                position: absolute;
                right: -8px;
                display: flex;
                width: 0;
                height: 50%;
                border-right: 1px solid hsla(var(--brand-hue) 10% 50% / 0.15);
            }
        }
    }

    input {
        display: flex;
        width: 14px;
        height: 14px;
        margin: 0;
        margin-right: 4px;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
