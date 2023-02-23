import { writable } from 'svelte/store';
import { Settings } from './Settings';

export const settingsStore = writable( new Settings() );