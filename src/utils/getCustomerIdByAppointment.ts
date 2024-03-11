import axios from 'axios';

export const getCustomerIdByTimecell = async (timecellId: string) => {
    try {
        const timecell = await axios.get(import.meta.env.VITE_API_URL + '/timecell/' + timecellId);
        if (timecell.status !== 200) throw 'appointment error';
        return timecell.data.customer._id;
    } catch (error) {
        console.error(error);
        return '';
    }
};
