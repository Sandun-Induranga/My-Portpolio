$(function () {
    $("form").submit(function () {
        return false;
    });

    // Auto Focus Item Code
    $('#modelItem').on('shown.bs.modal', function() {
        $('#txtItemCode').trigger('focus');
    });
});

// Button Save On Action
$("#btnSaveItem").on("click", function () {
    saveItem();
});

$("#btnSaveItem").on("click", function () {
    $("#btnSaveItem").text("Save");
});

function saveItem() {
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let unitPrice = $("#txtItemPrice").val();
    let qty = $("#qtyOnHand").val();

    if ($("#btnSaveItem").text() == "Save") {
        var item = setItem(itemCode, itemName, unitPrice, qty);
        itemDB.push(item);
    } else {
        updateItem(itemCode, itemName, unitPrice, qty);
    }

    loadAllItems();
}

// Load all Items
function loadAllItems() {

    $("#tblItem > tbody").empty();

    for (let item of itemDB) {
        $("#tblItem > tbody").append(
            `<tr><td>${item.itemCode}</td><td>${item.itemName}</td><td>${item.unitPrice}</td><td>${item.qty}</td><td><i class="bi bi-pencil-fill text-success me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i><i class="bi bi-trash text-danger"></i></td></tr>`
        );
    }
}
