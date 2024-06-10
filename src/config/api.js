// api.js
import axios from 'axios';
import config from './config.js';

const getVendor = async () => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-list-vendor`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getBalizooPopular = async () => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-popular-product-2?slug=bali-zoo`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getBaliFarmPopular = async () => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-popular-product-2?slug=bali-farm-house`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getBaliBirdPopular = async () => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-popular-product-2?slug=bali-bird-park`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getBaliSafariPopular = async () => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-popular-product-2?slug=bali-safari`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getVendorDetail = async (slug) => {
    try {
        const response = await axios.get(`https://balitiket.mindimedia.com/api/v1/get-detail-vendor?slug=${slug}`);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getPopularActivity = async (slug) => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-popular-product-2?slug=${slug}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const getDetailProduct = async (vendorSlug, productSlug) => {
    try {
        const response = await axios.get(`${config.apiUrl}/get-detail-product?vendor=${vendorSlug}&product=${productSlug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

export {
    getPopularActivity,
    getVendorDetail,
    getVendor,
    getBalizooPopular,
    getBaliFarmPopular,
    getBaliBirdPopular,
    getBaliSafariPopular,
    getDetailProduct
};
