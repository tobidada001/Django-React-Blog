
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from React_Blog import views
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token


router = DefaultRouter()
router.register('post', views.PostListViewSet, basename = 'postsset')
router.register('detail', views.PostDetailViewSet, basename = 'postdetailset')
router.register('categories', views.CategoriesViewSet, basename = 'categories')
router.register('tags', views.TagsViewSet, basename = 'tags')
router.register('archives', views.ArchivesViewSet, basename = 'archives')
router.register('comments', views.CommentsViewSet, basename = 'comments')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api/',  include(router.urls)),
    path('user-auth/', obtain_auth_token),
    path('', views.index)
] 

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)