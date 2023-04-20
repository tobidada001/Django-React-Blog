from django.contrib import admin
from .models import Post, Categories, Comments, Replies, Contact
# Register your models here.



@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    exclude = ('author',)
    list_display= ['post_title', 'author']
    prepopulated_fields = {'slug': ('post_title',)}
    
    def save_model(self, request, obj, form, change):
        obj.author = request.user
        super(PostAdmin, self).save_model(request, obj, form, change)


admin.site.register(Categories)
admin.site.register(Comments)
admin.site.register(Replies)
admin.site.register(Contact)
