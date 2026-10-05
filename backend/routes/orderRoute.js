import express from 'express'
import {placeOrder, placeOrderRazorpay, verifyRazorpay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.get("/list", adminAuth, allOrders);      //dashboard page
orderRouter.post('/status',adminAuth,updateStatus)   //orders page

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// User Feature
orderRouter.post('/userorders',authUser,userOrders)

// Verify Razorpay
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter
