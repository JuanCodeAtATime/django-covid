from django.contrib import admin

from orb.models import Category, Tag, Resource, ResourceURL
from orb.models import ResourceFile, ResourceTag, UserProfile
from orb.models import ResourceTracker, SearchTracker, TagOwner, ResourceWorkflowTracker
# Register your models here.

    
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name','top_level','slug','order_by')

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title','status', 'create_user', 'create_date', 'slug')
    search_fields = ['title','description']
    
class ResourceURLAdmin(admin.ModelAdmin):
    list_display = ('resource', 'url', 'title', 'description')
    search_fields = ['title','description']

class ResourceFileAdmin(admin.ModelAdmin):
    list_display = ('resource', 'file', 'title', 'description')
    search_fields = ['title','description']
  
class ResourceTagAdmin(admin.ModelAdmin):
    list_display = ('resource', 'tag')

class ResourceTrackerAdmin(admin.ModelAdmin):
    list_display = ('resource', 'user', 'access_date', 'ip', 'type')
 
class ResourceWorkflowTrackerAdmin(admin.ModelAdmin):
    list_display = ('resource', 'create_user', 'create_date', 'status', 'notes', 'owner_email_sent')
    search_fields = ['notes']
     
class SearchTrackerAdmin(admin.ModelAdmin):
    list_display = ('query', 'user', 'access_date', 'no_results', 'ip', 'type')
        
class TagAdmin(admin.ModelAdmin):
    list_display = ('name','category', 'parent_tag', 'slug', 'order_by')
    search_fields = ['name','description']

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'api_access', 'about', 'job_title', 'organisation')

class TagOwnerAdmin(admin.ModelAdmin):
    list_display = ('user', 'tag')
                 
admin.site.register(Category,CategoryAdmin)
admin.site.register(Tag, TagAdmin) 
admin.site.register(TagOwner, TagOwnerAdmin) 
admin.site.register(Resource, ResourceAdmin) 
admin.site.register(ResourceURL, ResourceURLAdmin)
admin.site.register(ResourceFile, ResourceFileAdmin)
admin.site.register(ResourceTag, ResourceTagAdmin)
admin.site.register(ResourceTracker, ResourceTrackerAdmin)
admin.site.register(ResourceWorkflowTracker, ResourceWorkflowTrackerAdmin)
admin.site.register(SearchTracker, SearchTrackerAdmin)
admin.site.register(UserProfile, UserProfileAdmin)