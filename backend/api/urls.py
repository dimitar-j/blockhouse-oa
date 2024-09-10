from django.urls import path
from .views import CandlestickView, LineChartView, BarChartView, PieChartView

urlpatterns = [
    path("candlestick-data/", CandlestickView.as_view(), name="candlestick"),
    path("line-chart-data/", LineChartView.as_view(), name="linechart"),
    path("bar-chart-data/", BarChartView.as_view(), name="barchart"),
    path("pie-chart-data/", PieChartView.as_view(), name="piechart"),
]
