from __future__ import unicode_literals

from django import template
from django.conf import settings
from django.core.urlresolvers import reverse
from django.utils.translation import ugettext as _

register = template.Library()


@register.filter(name='cloud_text_size')
def cloud_text_size(count, diff):
    return int(14.0 + ((28.0 / diff) * count))


@register.inclusion_tag('orb/resource/register_or_login.html')
def register_or_login(section_name):
    return {
        'section_name': section_name,
        'required': settings.DOWNLOAD_LOGIN_REQUIRED,
        'register_url': reverse('profile_register'),
        'login_url': reverse('profile_login'),
    }


@register.simple_tag(takes_context=True)
def resourcefile_link(context, resourcefile, alternate_link):
    """Returns the URL for a ResourceFile

    Renders the resource file download URL if the user is authenticated
    OR if the setting is turned off.
    """
    file_link = "href='{url}' title='{title}' class='{css_class}'"
    if not settings.DOWNLOAD_LOGIN_REQUIRED or context['user'].is_authenticated():
        url = resourcefile.get_absolute_url()
        title = _("Download ") + resourcefile.filename()
        css_class = 'active-link'
    else:
        url = alternate_link
        title = _("Please login on register to download these files or access these links")
        css_class = 'disabled-link'
    return file_link.format(url=url, title=title, css_class=css_class)


@register.simple_tag(takes_context=True)
def resourceurl_link(context, resourceurl, alternate_link):
    """Returns the redirect URL for a ResourceURL

    Renders the resource URL redirect link if the user is authenticated
    OR if the setting is turned off.
    """
    link_link = "href='{url}' title='{title}' class='{css_class}'"
    if not settings.DOWNLOAD_LOGIN_REQUIRED or context['user'].is_authenticated():
        url = resourceurl.get_absolute_url()
        title = _("Go to ") + resourceurl.url
        css_class = 'active-link'
    else:
        url = alternate_link
        title = _("Please login on register to download these files or access these links")
        css_class = 'disabled-link'
    return link_link.format(url=url, title=title, css_class=css_class)
