# Generated by Django 4.2.5 on 2025-07-09 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pagesAdministration', '0009_rename_seo_meta_author_pagedetails_seo_author_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='pagedetails',
            name='service_menu_ID',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
