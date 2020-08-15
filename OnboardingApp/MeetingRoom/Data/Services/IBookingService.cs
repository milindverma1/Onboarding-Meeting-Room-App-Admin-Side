using System.Collections.Generic;

namespace MeetingRoom.Data
{
    public interface IBookingService
    {
        List<BookingObject> GetAllBookings();

        void AddBooking(BookingObject booking);

        void UpdateBooking(string bookingId, BookingObject booking);

        void DeleteBooking(string bookingId);
    }
}