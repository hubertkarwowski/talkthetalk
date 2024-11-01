'use client'

import { useForm, ValidationError } from '@formspree/react'
import { LocateFixedIcon, Mail, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvgognab')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="bg-secondary text-secondary-foreground p-2 lg:flex lg:flex-row lg:h-[600px]">
      <div className="flex flex-col justify-between text-center bg-gray-700 p-4 lg:text-left lg:w-[40%]">
        <div>
          <h2>Contact Form</h2>
          <p>Say something to start a live chat!</p>
        </div>
        <div>
          <span className="flex items-center">
            <PhoneIcon className="mr-2" />
            +48 536 056 177
          </span>
          <span className="flex items-center mt-2">
            <Mail className="mr-2" />
            talkthetalktutoringpl@gmail.com
          </span>
          <span className="flex items-center mt-2">
            <LocateFixedIcon className="mr-2" />
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
        <div></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-12 lg:lg:w-[60%] px-4 space-y-12"
      >
        <div className="lg:flex lg:justify-between gap-2">
          <div className="lg:w-1/2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" type="text" name="fullName" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button type="submit" disabled={state.submitting} className="mt-6">
          Send Message
        </Button>
      </form>
    </div>
  )
}
