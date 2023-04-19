from django.urls import path
# from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from api.views import cbv, fbv

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('companies/', cbv.CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', cbv.CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies', cbv.VacancyListByCompanyAPIView.as_view()),
    # path('vacancies/', views.vacancy_list),
    # path('vacancies/<int:pk>/', views.vacancy_detail),
    # path('vacancies/top_ten/', views.vacancy_top_ten)
]