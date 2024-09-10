from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    CandlestickSerializer,
    LineChartSerializer,
    BarChartSerializer,
    PieChartSerializer,
)


class CandlestickView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 32, "high": 42, "low": 28, "close": 31},
                {"x": "2023-01-03", "open": 31, "high": 36, "low": 26, "close": 30},
                {"x": "2023-01-04", "open": 34, "high": 39, "low": 29, "close": 37},
                {"x": "2023-01-05", "open": 36, "high": 45, "low": 32, "close": 40},
            ]
        }
        serializer = CandlestickSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LineChartView(APIView):
    def get(self, request):
        data = {"labels": ["Jan", "Feb", "Mar", "Apr"], "data": [10, 20, 30, 40]}
        serializer = LineChartSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BarChartView(APIView):
    def get(self, request):
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200],
        }
        serializer = BarChartSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PieChartView(APIView):
    def get(self, request):
        data = {"labels": ["Red", "Blue", "Yellow"], "data": [300, 50, 100]}
        serializer = PieChartSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)
