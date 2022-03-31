import dbConnect from '../../../utils/dbConnect';
import Card from '../../../models/Card';

dbConnect();

export default async(req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const card = await Card.findById(id);

                if (!card) {
                  return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: card });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const card = await Card.findByIdAndUpdate(id, req.body, {
                  new: true,
                  runValidators: true,
                });

                if (!card) {
                  return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: card });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedCards = await Card.deleteOne({ _id: id });

                if (!deletedCards) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}