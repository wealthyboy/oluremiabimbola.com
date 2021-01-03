<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PictureNotification extends Notification
{
    use Queueable;

    public $picture;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($picture)
    {
        $this->picture = $picture;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('Dear admin')
                    ->subject("You have a new message from oluremiabimbola.com")
                    ->line(" New {$this->picture['intro']} message")
                    ->line('Full name: ' . $this->picture['full_name'])
                    ->line('Comment: ' . $this->picture['comment'])
                    ->line('Email: ' . $this->picture['email']);

    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
