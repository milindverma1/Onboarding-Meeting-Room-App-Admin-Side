using System.Collections.Generic;

namespace MeetingRoom.Data
{
    public static class Data
    {
        public static List<RoomObject> Rooms => allRooms;
        static List<RoomObject> allRooms = new List<RoomObject>()
            {
            new RoomObject()
            {
                roomId = "ND-B1-A5-19", RoomType = "B", Location = "Noida", Capacity = 6, Description = "", Status = "U"
            },
            new RoomObject()
            {
                roomId = "ND-B1-A4-09", RoomType = "A", Location = "Noida", Capacity = 8, Description = "", Status = "N"
            },
            new RoomObject()
            {
                roomId = "HYD-B2-B6-29", RoomType = "C", Location = "Hyderabad", Capacity = 12, Description = "", Status = "N"
            },
            new RoomObject()
            {
                roomId = "HYD-B1-A5-01", RoomType = "A", Location = "Hyderabad", Capacity = 7, Description = "", Status = "N"
            }
        };

        public static List<EquipmentObject> Equipment => allEquipment;
        static List<EquipmentObject> allEquipment = new List<EquipmentObject>()
            {
            new EquipmentObject()
            {
                equipmentId = "X1", equipmentName = "Projector", equipmentQuantity = 25
            },
            new EquipmentObject()
            {
                equipmentId = "Y1", equipmentName = "Whiteboard", equipmentQuantity = 30
            },
            new EquipmentObject()
            {
                equipmentId = "Z1", equipmentName = "Screens", equipmentQuantity = 10
            },
            new EquipmentObject()
            {
                equipmentId = "A1", equipmentName = "Markers", equipmentQuantity = 50
            }
        };

        public static List<BookingObject> Bookings => allBookings;
        static List<BookingObject> allBookings = new List<BookingObject>()
            {
            new BookingObject()
            {
                bookingId = "12X", bookingDate = "27/07/2020", meetingDate = "05/08/2020", meetingTime = "11:30", employeeId = "13B",
                roomId = "ND-B1-A4-09", additionalEquipment = "Projector", requiredLayout = "Rounds"
            },
            new BookingObject()
            {
                bookingId = "08Z", bookingDate = "28/07/2020", meetingDate = "15/08/2020", meetingTime = "14:30", employeeId = "19A",
                roomId = "HYD-B2-B6-29", additionalEquipment = "Whiteboard", requiredLayout = "Rounds"
            },
        };
    }
}