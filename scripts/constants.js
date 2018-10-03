// Core
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';
import chalk from 'chalk';

// Instruments
import PACKAGE_JSON from '../package.json';

// Network
export const HOST = 'localhost';
export const PORT = 3000;
export const SYNC_BRANCH_NAME = 'lectrum-dev';
export const MASTER_REMOTE_UPSTREAM_REFERENCE = 'refs/remotes/upstream/master';
export const SYNC_LOCAL_REFERENCE = `refs/heads/${SYNC_BRANCH_NAME}`;
export const SYNC_REMOTE_ORIGIN_REFERENCE = `refs/remotes/origin/${SYNC_BRANCH_NAME}`;
export const SYNC_REMOTE_UPSTREAM_REFERENCE = `refs/remotes/upstream/${SYNC_BRANCH_NAME}`;
export const BACKUP_BRANCH_NAME = 'checkpoint';
export const GIT_HTTPS_URL = `https://github.com/lectrum/${
    PACKAGE_JSON.name
}.git`;
export const GIT_SSH_URL = `git@github.com:lectrum/${PACKAGE_JSON.name}.git`;
export const COMMIT_PHRASE_START = chalk.greenBright('→ Checkpoint at');

// Paths
export const SOURCE = resolve(PROJECT_ROOT, './source');
export const BUILD = resolve(PROJECT_ROOT, './build');
export const STATICS = resolve(PROJECT_ROOT, './static');
export const GIT_ROOT = resolve(PROJECT_ROOT, './.git');

// Package.json
export { PACKAGE_JSON };
