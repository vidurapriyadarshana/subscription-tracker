import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => { title: 'Get all subscriptions' })

subscriptionRouter.get('/:id', (req, res) => { title: 'Get subscription details' })

subscriptionRouter.post('/', (req, res) => { title: 'Create subscription' })

subscriptionRouter.put('/:id', (req, res) => { title: 'Update subscription' })

subscriptionRouter.delete('/:id', (req, res) => { title: 'Delete subscription' })

subscriptionRouter.get('/user/:id', (req, res) => { title: 'Get all user subscriptions' })

subscriptionRouter.put('/:id/cancel', (req, res) => { title: 'Cancel subscriptions' })

subscriptionRouter.get('/upcoming-renewals', (req, res) => { title: 'Get upcoming renewals' })

export default subscriptionRouter;