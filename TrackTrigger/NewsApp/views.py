from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse
from .models import *
from .forms import *
from django.contrib import messages



def diaryPage(request):
    note_list = reversed(Diary.objects.all())
    context={
        'note_list': note_list
    }
    return render(request,'NewsApp/diary.html',context)

def diaryEntry(request, slug):
    note = Diary.objects.get(slug=slug)
    context = {
        'ind_entry': note
    }
    return render(request, 'NewsApp/diaryentry.html', context)


def DiaryModelForm(request):
    context={
        "diarymodelform":DiaryEntryForm
    }
    return render(request, 'NewsApp/diarymodelform.html',context)

def addDiaryModelForm(request):
    mydiarymodelform = DiaryEntryForm(request.POST)

    if mydiarymodelform.is_valid():
        mydiarymodelform.save()
        messages.add_message(request, messages.SUCCESS, "Your entry has been logged")
    return redirect('diary')

def InventoryPage(request):
    inventory_list = InventoryObject.objects.all()
    context={
        'inventory_list': inventory_list
    }
    return render(request,'NewsApp/inventory.html',context)

def InventoryModelForm(request):
    context={
        "inventorymodelform":NewInventoryForm
    }
    return render(request, 'NewsApp/inventorymodelform.html',context)

def addInventoryModelForm(request):
    myinventorymodelform = NewInventoryForm(request.POST)

    if myinventorymodelform.is_valid():
        myinventorymodelform.save()
    return redirect('inventory')

def NewQuantityForm(request):
    context={
        "f":ChangeQuantityForm,
        "d":AddDate
    }
    return render(request, 'newquantity.html',context)

def EditQuantityForm(request):
    f = ChangeQuantityForm(request.POST)
    d = AddDate(request.POST)
    if (f.is_valid() & d.is_valid()):
        s = f.cleaned_data.get('name')
        i = f.cleaned_data.get('quantity')
        a = InventoryObject.objects.filter(name=s).update(quantity=i)
        date = d.cleaned_data.get('date')
        if(date != None):
            b = InventoryObject.objects.filter(name=s)
            desc = b.values('description')
            newitem = ToDoItem(name = s, description = desc[0]['description'], date = date)   
            newitem.save()
    return redirect('inventory')

def imagePage(request):
    image_list = reversed(ImageObject.objects.all())
    context={
        'list': image_list
    }
    return render(request,'NewsApp/images.html',context)

def ImageModelForm(request):
    context={
        "imagemodelform":ImageEntryForm
    }
    return render(request, 'NewsApp/imagemodelform.html',context)

def addImageModelForm(request):
    myimagemodelform = ImageEntryForm(request.POST, request.FILES)

    if myimagemodelform.is_valid():
        myimagemodelform.save()
        messages.add_message(request, messages.SUCCESS, "Your image has been uploaded")
    return redirect('image')

def ToDoPage(request):
    todo_list = ToDoItem.objects.all()
    context={
        'todo_list': todo_list
    }
    return render(request,'NewsApp/todo.html',context)

def ToDoModelForm(request):
    context={
        "todomodelform":ToDoForm
    }
    return render(request, 'NewsApp/todomodelform.html',context)

def addToDoModelForm(request):
    mytodomodelform = ToDoForm(request.POST)

    if mytodomodelform.is_valid():
        mytodomodelform.save()
    return redirect('todolist')
