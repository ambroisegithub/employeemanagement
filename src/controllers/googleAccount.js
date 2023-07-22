import UserGoogle from '../models/googleModels';

export async function getAllUsers(req, res) {
    // try {
    const users = await UserGoogle.find({}, { __v: 0 });
    return res.status(200).json({
        status: 'success',
        message: 'All users retrieved successfully',
        data: users,
    });
    // } catch (error) {
    return res.status(500).json({
        status: 'error',
        message: 'Failed to retrieve users',
        error: error.message,
    });
    // }
}

export async function getUserById(req, res) {
    const user_id = req.params.id;
    try {
        const user = await UserGoogle.findById(user_id, { __v: 0 });
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: `User with ID ${user_id} not found`,
            });
        }
        return res.status(200).json({
            status: 'success',
            message: 'User retrieved successfully',
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve user',
            error: error.message,
        });
    }
}

export async function updateUserById(req, res) {
    const user_id = req.params.id;
    const update = req.body;
    try {
        const updated_user = await UserGoogle.findByIdAndUpdate(
            user_id,
            update, { new: true, runValidators: true }
        );
        if (!updated_user) {
            return res.status(404).json({
                status: 'error',
                message: `User with ID ${user_id} not found`,
            });
        }
        return res.status(200).json({
            status: 'success',
            message: 'User updated successfully',
            data: updated_user,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to update user',
            error: error.message,
        });
    }
}

export async function deleteUserById(req, res) {
    const user_id = req.params.id;
    try {
        const deleted_user = await UserGoogle.findByIdAndDelete(user_id);
        if (!deleted_user) {
            return res.status(404).json({
                status: 'error',
                message: `User with ID ${user_id} not found`,
            });
        }
        return res.status(200).json({
            status: 'success',
            message: 'User deleted successfully',
            data: deleted_user,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to delete user',
            error: error.message,
        });
    }
}