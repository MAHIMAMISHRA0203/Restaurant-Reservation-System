# Restaurant-Reservation-System

import logging

# Create a logger

logger = logging.getLogger('Restaurant Reservation System')
logger.setLevel(logging.DEBUG)

# Create file handler and set level to debug

file_handler = logging.FileHandler('restaurant_reservation_system.log')
file_handler.setLevel(logging.DEBUG)

# Create console handler and set level to info

console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

# Create formatter

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

# Add formatter to handlers

file_handler.setFormatter(formatter)
console_handler.setFormatter(formatter)

# Add handlers to logger

logger.addHandler(file_handler)
logger.addHandler(console_handler)
