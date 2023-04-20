from .models import Post, Categories, Comments, Replies
from .serializers import PostListSerializer, PostDetailSerializer, CategoriesSerializer, CommentsSerializer, TagsSerializer, ArchivesSerializer
from rest_framework import viewsets
from taggit.models import Tag
from taggit_serializer.serializers import TaggitSerializer
from django.shortcuts import render
from django.http import HttpResponse

class PostListViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    lookup_field = "slug"

class PostDetailViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    lookup_field = "slug"

class ArchivesViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter().order_by('-post_date')
    serializer_class = ArchivesSerializer

class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagsSerializer

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
    lookup_field = "category"

class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    

def index(request):
    return HttpResponse('HELLO WORLD!')
