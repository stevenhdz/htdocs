import unittest
from unittest.mock import patch
from infrastructure.internal_adapters.logger_adapter import SimpleLogger


class TestSimpleLogger(unittest.TestCase):
    @patch("builtins.print")
    def test_log_info(self, mock_print):
        logger = SimpleLogger()
        logger.info("This is an info message")
        mock_print.assert_called_once_with("[INFO] This is an info message")

    @patch("builtins.print")
    def test_log_error(self, mock_print):
        logger = SimpleLogger()
        logger.error("This is an error message")
        mock_print.assert_called_once_with("[ERROR] This is an error message")
