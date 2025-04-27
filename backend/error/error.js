class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal Server Error';
    err.statusCode = err.statusCode || 500;

    // Log the error for debugging
    console.error('Error:', err.message);
    console.error('Stack:', err.stack);

    // Handle validation errors
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors)
            .map(value => value.message)
            .join(', ');
        return res.status(400).json({
            success: false,
            message: message
        });
    }

    // Handle other errors
    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};

export { ErrorHandler };