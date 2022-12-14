require('dotenv').config();

import api from './api';
import { getConfig } from './config';

const PORT = getConfig().PORT || 8080;

api.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
