import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import admin from '../../config/admin';

const authMiddleware = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.headers.authorization?.split('Bearer ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            const decodedToken = await admin.auth().verifyIdToken(token);
            (req as any).user = decodedToken;
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    };
};

export default authMiddleware;
